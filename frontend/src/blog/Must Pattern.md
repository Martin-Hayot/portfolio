---
title: "Must Pattern"
pubDate: 2024-12-02
description: "A pattern that is used to create helper functions that wrap operations, panicking if an error occurs."
author: "Martin Hayot"
image:
    url: ""
    alt: ""
tags: ["go", "blogging", "pattern"]
---

## Table of Contents

# What is a "must" pattern ?
It's about creating helper functions that wrap operations, panicking if an error occurs. It's often used in scenarios where you know the code is guaranteed to succeed.

## How error handling in Go looks like
```go
package main

import (
	"log"
	"os"
	"text/template"
)

func main() {
	tmpl, err := template.New("example").Parse("Hello, {{.}}!")
	if err != nil {
		log.Fatalf("Failed to parse template: %v", err)
	}

	err = tmpl.Execute(os.Stdout, "World")
	if err != nil {
		log.Fatalf("Faided to execute template: %v", err)
	}
}
```

## What "must" pattern looks like
```go
package main

import (
	"log"
	"os"
	"text/template"
)

func main() {
	tmpl := template.Must(template.New("example").Parse("Hello, {{.}}!"))
	tmpl.Execute(os.Stdout, "World")
}
```

#### What "must" implementation looks like in this example
```go
func Must(t *Template, err error) *Template {
	if err != nil {
		panic(err)
	}
	return t
}
```

#### Generic implementation
```go
func Must[T any](val T, err error) T {
	if err != nil {
		panic(err)
	}
	return val
}
```
