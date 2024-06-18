package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/data", fetchDataHandler).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func fetchDataHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"data": "Hello, World!"}`))
}
