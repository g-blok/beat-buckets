package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"net/url"

	"github.com/gorilla/mux"
)

func fetchDataHandler(w http.ResponseWriter, r *http.Request) {
	queryParams := map[string]string{
		"client_id":           r.URL.Query().Get("client_id"),
		"limit":               r.URL.Query().Get("limit"),
		"offset":              r.URL.Query().Get("offset"),
		"linked_partitioning": r.URL.Query().Get("linked_partitioning"),
		"app_version":         r.URL.Query().Get("app_version"),
		"app_locale":          r.URL.Query().Get("app_locale"),
	}
	headers := map[string]string{
		"Authorization": r.Header.Get("Authorization"),
	}

	endpoint := "https://api-v2.soundcloud.com/me/library/all"

	data, err := fetchDataFromAPI(endpoint, queryParams, headers)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"data": data})
}

func fetchDataFromAPI(endpoint string, queryParams map[string]string, headers map[string]string) (string, error) {
	baseURL, err := url.Parse(endpoint)
	if err != nil {
		return "", err
	}

	params := url.Values{}
	for key, value := range queryParams {
		params.Add(key, value)
	}
	baseURL.RawQuery = params.Encode()

	req, err := http.NewRequest("GET", baseURL.String(), nil)
	if err != nil {
		return "", err
	}

	for key, value := range headers {
		req.Header.Add(key, value)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/data", fetchDataHandler).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}
