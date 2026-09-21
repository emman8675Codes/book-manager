import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ books }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Book Lists
                </h2>
            }
        >
            <Head title="Book Lists" />
            <div>
                <h1> Available Books</h1>

                <Link href={route("books.create")}>
                    <SecondaryButton>Add Book</SecondaryButton>
                </Link>
                <table className="border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {books.length > 0 ? (
                        books.map((book) => (
                            <tbody key={book.id}>
                                <tr>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <Link
                                            href={route("books.show", book.id)}
                                        >
                                            <SecondaryButton>
                                                Details
                                            </SecondaryButton>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    ) : (
                        <tbody>
                            <tr>No books found.</tr>
                        </tbody>
                    )}
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
