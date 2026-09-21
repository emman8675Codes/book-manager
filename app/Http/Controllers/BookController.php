<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Book;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $books = Book::all();
        return Inertia::render("Books/Index", [
            "books"=> $books
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

        return Inertia::render("Books/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validated = $request->validate([
            "title"=> "required|string|max:255",
            "author" => "required|string",
            "genre" => "required|string"
        ]);

        $book = Book::create($validated);

        return redirect()->route("books.index")->with("success","Product added successfully!");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $book =  Book::findOrFail($id);
        return Inertia::render("Books/Details", [
            "book" => $book
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
