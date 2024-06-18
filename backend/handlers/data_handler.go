package handlers

import (
	"encoding/json"
	"net/http"
	"services"
)

func fetchDataHandler(w http.ResponseWriter, r *http.Request) {
	// Extract query parameters and headers from the request
	queryParams := map[string]string{
		"param1": r.URL.Query().Get("param1"),
		"param2": r.URL.Query().Get("param2"),
	}

	headers := map[string]string{
		"Header1": r.Header.Get("Header1"),
		"Header2": r.Header.Get("Header2"),
	}

	// Define the external API endpoint
	endpoint := "https://api.example.com/data"

	// Fetch data from the external API
	data, err := services.FetchDataFromAPI(endpoint, queryParams, headers)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Write the response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"data": data})
}
