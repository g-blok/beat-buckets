package services

import (
	"io"
	"net/http"
	"net/url"
)

func FetchDataFromAPI(endpoint string, queryParams map[string]string, headers map[string]string) (string, error) {
	// Build the URL with query parameters
	baseURL, err := url.Parse(endpoint)
	if err != nil {
		return "", err
	}

	params := url.Values{}
	for key, value := range queryParams {
		params.Add(key, value)
	}
	baseURL.RawQuery = params.Encode()

	// Create a new HTTP request
	req, err := http.NewRequest("GET", baseURL.String(), nil)
	if err != nil {
		return "", err
	}

	// Add headers to the request
	for key, value := range headers {
		req.Header.Add(key, value)
	}

	// Make the HTTP request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}
