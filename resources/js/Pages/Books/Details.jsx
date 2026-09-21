import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Details({ book }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Book Details
                </h2>
            }
        >
            <Head title="Book Details" />
            <div>
                <h1> Books Details</h1>

                <Link href={route("books.index")}>
                    <SecondaryButton>Return</SecondaryButton>
                </Link>

                <h1>Book Title: {book.title}</h1>
                <h1>Book Author: {book.author}</h1>
                <p>Genre: {book.genre}</p>
            </div>
        </AuthenticatedLayout>
    );
}
