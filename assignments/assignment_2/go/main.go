package main

import (
	"log"
	"fmt"
	"os"
	"bufio"
	"regexp"
	"strings"
	"time"

	"sortingShakespeare/sorting"
)

func main () {

	text :=	getFilteredShakespearText("shakespeare-complete-works.txt")

	array := removeDuplicates(strings.Split(text, " "))
	// array := []string{"the", "project", "gutenberg", "ebook", "of", "the", "complete", "works", "of", "william", "shakespeare", "by", "william", "shakespeare", "this", "ebook", "is", "for", "the", "use"}
	fmt.Println("Mergesort started")
	stime := time.Now()
	array = sort.Mergesort(array)
	etime := time.Since(stime)
	fmt.Println("Mergesort ended %s", etime)

	fmt.Println()

	array = removeDuplicates(strings.Split(text, " "))
	fmt.Println("quicksort started")
	stime = time.Now()
	array = sort.QuickSort(array)
	etime = time.Since(stime)
	fmt.Println("quicksort ended %s", etime)
}


func getFilteredShakespearText (filename string) (string) {

	file, err := os.Open(filename)
	if(err != nil) {
		log.Fatal(err)
	}
	defer file.Close() // Execute after eveything is finished

	scanner := bufio.NewScanner(file)
	if err := scanner.Err(); err != nil {
		log.Fatalln(err)
	}

	text := ""
	for scanner.Scan() {
		text += scanner.Text() + " "
	}

	t := text
	
	t = regexp.MustCompile(`[0-9]`).ReplaceAllString(t, " ")
	t = regexp.MustCompile(`http(s|):\/\/www\.`).ReplaceAllString(t, " ")
	t = regexp.MustCompile(`www`).ReplaceAllString(t, " ")
	t = regexp.MustCompile(`[,\.*\/()$;\\:\@\?#\\'\-]`).ReplaceAllString(t, " ")
	t = regexp.MustCompile(`[\s]{2,}`).ReplaceAllString(t, " ")
	t = regexp.MustCompile(`\s[A-z]\s`).ReplaceAllString(t, " ")

	return strings.ToLower(t)
}


func removeDuplicates(elements []string) []string {
    // Use map to record duplicates as we find them.
    encountered := map[string]bool{}
    result := []string{}

    for v := range elements {
        if encountered[elements[v]] == true {
            // Do not add duplicate.
        } else {
            // Record this element as an encountered element.
            encountered[elements[v]] = true
            // Append to result slice.
            result = append(result, elements[v])
        }
    }
    // Return the new slice.
    return result
}