import { Head, Link, usePage } from '@inertiajs/react';
import {
    BadgeCheck,
    ChevronDown,
    Facebook,
    Headphones,
    Heart,
    Instagram,
    Menu,
    Search,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Star,
    Tag,
    Truck,
    Twitter,
    User,
    Youtube,
} from 'lucide-react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

const assetUrl = 'https://demo.templatesjungle.com/ministore/images';

const navigationItems = [
    { label: 'Home', href: '#billboard' },
    { label: 'Services', href: '#company-services' },
    { label: 'Products', href: '#mobile-products' },
    { label: 'Watches', href: '#smart-watches' },
    { label: 'Sale', href: '#yearly-sale' },
    { label: 'Blog', href: '#latest-blog' },
];

const categories = [
    'Mobile Phones',
    'Smart Watches',
    'Headphones',
    'Accessories',
    'Monitors',
    'Speakers',
    'Memory Cards',
];

const services = [
    {
        title: 'Free delivery',
        description: 'Consectetur adipi elit lorem ipsum dolor sit amet.',
        icon: Truck,
    },
    {
        title: 'Quality guarantee',
        description: 'Dolor sit amet orem ipsu mcons ectetur adipi elit.',
        icon: BadgeCheck,
    },
    {
        title: 'Daily offers',
        description: 'Amet consectetur adipi elit loreme ipsum dolor sit.',
        icon: Tag,
    },
    {
        title: '100% secure payment',
        description: 'Rem Lopsum dolor sit amet, consectetur adipi elit.',
        icon: ShieldCheck,
    },
];

const mobileProducts = [
    { name: 'Iphone 10', price: '$980', image: 'product-item1.jpg' },
    { name: 'Iphone 11', price: '$1100', image: 'product-item2.jpg' },
    { name: 'Iphone 8', price: '$780', image: 'product-item3.jpg' },
    { name: 'Iphone 13', price: '$1500', image: 'product-item4.jpg' },
    { name: 'Iphone 12', price: '$1300', image: 'product-item5.jpg' },
];

const watchProducts = [
    { name: 'Pink watch', price: '$870', image: 'product-item6.jpg' },
    { name: 'Heavy watch', price: '$680', image: 'product-item7.jpg' },
    { name: 'Spotted watch', price: '$750', image: 'product-item8.jpg' },
    { name: 'Black watch', price: '$650', image: 'product-item9.jpg' },
    { name: 'Black watch', price: '$750', image: 'product-item10.jpg' },
];

const posts = [
    {
        title: 'Get some cool gadgets in 2023',
        meta: 'feb 22, 2023 - Gadgets',
        image: 'post-item1.jpg',
    },
    {
        title: "Technology Hack You Won't Get",
        meta: 'feb 25, 2023 - Technology',
        image: 'post-item2.jpg',
    },
    {
        title: 'Top 10 Small Camera In The World',
        meta: 'feb 22, 2023 - Camera',
        image: 'post-item3.jpg',
    },
];

const instagramImages = [
    'insta-item1.jpg',
    'insta-item2.jpg',
    'insta-item3.jpg',
    'insta-item4.jpg',
    'insta-item5.jpg',
];

function ProductSection({
    id,
    title,
    products,
}: {
    id: string;
    title: string;
    products: typeof mobileProducts;
}) {
    return (
        <section
            id={id}
            className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
        >
            <div className="mb-8 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-light tracking-[0.22em] text-neutral-900 uppercase sm:text-3xl">
                    {title}
                </h2>
                <a
                    href="#"
                    className="text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase transition hover:text-neutral-950"
                >
                    Go to shop
                </a>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
                {products.map((product) => (
                    <article
                        key={`${title}-${product.name}-${product.image}`}
                        className="group"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-[#edf1f3]">
                            <img
                                src={`${assetUrl}/${product.image}`}
                                alt={product.name}
                                className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
                            />
                            <button className="absolute right-4 bottom-4 left-4 flex translate-y-3 items-center justify-center gap-2 bg-neutral-950 px-4 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                                Add to cart
                                <ShoppingCart className="size-4" />
                            </button>
                        </div>
                        <div className="flex items-start justify-between gap-4 pt-4">
                            <h3 className="text-base font-light tracking-[0.18em] text-neutral-800 uppercase">
                                {product.name}
                            </h3>
                            <span className="text-base font-medium text-[#7d9fb2]">
                                {product.price}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="MiniStore" />
            <div className="min-h-screen bg-white font-sans text-neutral-700">
                <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
                    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
                        <a
                            href="#billboard"
                            className="flex items-center gap-2"
                            aria-label="MiniStore home"
                        >
                            <img
                                src={`${assetUrl}/main-logo.png`}
                                alt="MiniStore"
                                className="h-8 w-auto"
                            />
                        </a>

                        <nav className="hidden items-center gap-7 text-sm tracking-[0.18em] text-neutral-700 uppercase lg:flex">
                            {navigationItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="transition hover:text-[#79a4bb]"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="flex items-center gap-1 transition hover:text-[#79a4bb]">
                                Pages <ChevronDown className="size-4" />
                            </button>
                        </nav>

                        <div className="flex items-center gap-3 text-neutral-800">
                            <button
                                aria-label="Search"
                                className="hidden p-2 transition hover:text-[#79a4bb] sm:block"
                            >
                                <Search className="size-5" />
                            </button>
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    aria-label="Dashboard"
                                    className="p-2 transition hover:text-[#79a4bb]"
                                >
                                    <User className="size-5" />
                                </Link>
                            ) : (
                                <Link
                                    href={login()}
                                    className="hidden text-xs tracking-[0.18em] uppercase transition hover:text-[#79a4bb] sm:block"
                                >
                                    Log in
                                </Link>
                            )}
                            {!auth.user && (
                                <Link
                                    href={register()}
                                    className="hidden bg-neutral-950 px-4 py-2 text-xs tracking-[0.18em] text-white uppercase transition hover:bg-[#79a4bb] sm:block"
                                >
                                    Register
                                </Link>
                            )}
                            <button
                                aria-label="Wishlist"
                                className="p-2 transition hover:text-[#79a4bb]"
                            >
                                <Heart className="size-5" />
                            </button>
                            <button
                                aria-label="Cart"
                                className="p-2 transition hover:text-[#79a4bb]"
                            >
                                <ShoppingBag className="size-5" />
                            </button>
                            <button aria-label="Menu" className="p-2 lg:hidden">
                                <Menu className="size-6" />
                            </button>
                        </div>
                    </div>
                </header>

                <main>
                    <section
                        id="billboard"
                        className="relative overflow-hidden bg-[#edf1f3] pt-20"
                    >
                        <div className="mx-auto grid min-h-[690px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-8">
                            <div className="max-w-2xl">
                                <p className="mb-5 text-sm tracking-[0.35em] text-[#79a4bb] uppercase">
                                    New technology everyday
                                </p>
                                <h1 className="text-5xl leading-[0.95] font-light tracking-[0.04em] text-neutral-950 uppercase sm:text-7xl lg:text-8xl">
                                    Your products are great.
                                </h1>
                                <a
                                    href="#mobile-products"
                                    className="mt-10 inline-flex bg-neutral-950 px-8 py-4 text-sm font-semibold tracking-[0.22em] text-white uppercase transition hover:bg-[#79a4bb]"
                                >
                                    Shop product
                                </a>
                            </div>
                            <div className="relative flex justify-center lg:justify-end">
                                <img
                                    src={`${assetUrl}/banner-image.png`}
                                    alt="Black smart watch"
                                    className="max-h-[560px] w-full max-w-[560px] object-contain"
                                />
                            </div>
                        </div>
                    </section>

                    <section
                        id="company-services"
                        className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4"
                    >
                        {services.map((service) => (
                            <article key={service.title} className="flex gap-4">
                                <service.icon
                                    className="mt-1 size-8 shrink-0 text-[#79a4bb]"
                                    strokeWidth={1.5}
                                />
                                <div>
                                    <h3 className="mb-2 text-lg font-light tracking-[0.18em] text-neutral-900 uppercase">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-neutral-500">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </section>

                    <ProductSection
                        id="mobile-products"
                        title="Mobile Products"
                        products={mobileProducts}
                    />
                    <ProductSection
                        id="smart-watches"
                        title="Smart Watches"
                        products={watchProducts}
                    />

                    <section
                        id="yearly-sale"
                        className="overflow-hidden bg-[#edf1f3] bg-contain bg-right-bottom bg-no-repeat"
                        style={{
                            backgroundImage: `url(${assetUrl}/single-image1.png)`,
                        }}
                    >
                        <div className="mx-auto min-h-[470px] max-w-7xl px-5 py-20 sm:px-8 lg:flex lg:items-center">
                            <div className="max-w-xl bg-[#edf1f3]/75 py-8 backdrop-blur-[1px]">
                                <p className="mb-3 text-2xl font-light tracking-[0.16em] text-neutral-700 uppercase">
                                    10% off
                                </p>
                                <h2 className="text-5xl leading-none font-light tracking-[0.05em] text-neutral-950 uppercase sm:text-7xl">
                                    New year sale
                                </h2>
                                <a
                                    href="#mobile-products"
                                    className="mt-9 inline-flex bg-neutral-950 px-8 py-4 text-sm font-semibold tracking-[0.22em] text-white uppercase transition hover:bg-[#79a4bb]"
                                >
                                    Shop sale
                                </a>
                            </div>
                        </div>
                    </section>

                    <section
                        id="latest-blog"
                        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
                    >
                        <div className="mb-8 flex items-center justify-between gap-4">
                            <h2 className="text-2xl font-light tracking-[0.22em] text-neutral-900 uppercase sm:text-3xl">
                                Latest Posts
                            </h2>
                            <a
                                href="#"
                                className="text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase transition hover:text-neutral-950"
                            >
                                Read blog
                            </a>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {posts.map((post) => (
                                <article key={post.title} className="group">
                                    <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                                        <img
                                            src={`${assetUrl}/${post.image}`}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="mt-5 text-xs tracking-[0.18em] text-neutral-400 uppercase">
                                        {post.meta}
                                    </p>
                                    <h3 className="mt-2 text-xl font-light tracking-[0.08em] text-neutral-900 uppercase">
                                        {post.title}
                                    </h3>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mx-auto max-w-5xl px-5 py-12 text-center sm:px-8">
                        <div className="mb-8 flex justify-center text-[#79a4bb]">
                            <Headphones
                                className="size-14"
                                strokeWidth={1.25}
                            />
                        </div>
                        <blockquote className="text-2xl leading-10 font-light text-neutral-700">
                            "Tempus oncu enim pellen tesque este pretium in
                            neque, elit morbi sagittis lorem habi mattis Pellen
                            tesque pretium feugiat vel morbi suspen dise
                            sagittis lorem habi tasse morbi."
                        </blockquote>
                        <div className="mt-7 flex justify-center gap-1 text-[#79a4bb]">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className="size-5 fill-current"
                                />
                            ))}
                        </div>
                        <p className="mt-4 text-sm tracking-[0.2em] text-neutral-950 uppercase">
                            Emma Chamberlin
                        </p>
                    </section>

                    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
                        <div className="grid gap-8 bg-neutral-950 px-6 py-10 text-white md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:px-16">
                            <div>
                                <h2 className="text-3xl font-light tracking-[0.18em] uppercase">
                                    Subscribe Us Now
                                </h2>
                                <p className="mt-3 text-neutral-400">
                                    Get latest news, updates and deals directly
                                    mailed to your inbox.
                                </p>
                            </div>
                            <form className="flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your email address here"
                                    className="min-h-13 flex-1 border border-white/15 bg-white px-4 text-neutral-950 outline-none focus:border-[#79a4bb]"
                                />
                                <button className="min-h-13 bg-[#79a4bb] px-7 text-sm font-semibold tracking-[0.22em] text-white uppercase transition hover:bg-white hover:text-neutral-950">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8">
                        <h2 className="mb-8 text-2xl font-light tracking-[0.22em] text-neutral-900 uppercase sm:text-3xl">
                            Shop Our Insta
                        </h2>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                            {instagramImages.map((image) => (
                                <a
                                    key={image}
                                    href="#"
                                    className="group relative aspect-square overflow-hidden bg-neutral-100"
                                >
                                    <img
                                        src={`${assetUrl}/${image}`}
                                        alt="Instagram shop item"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 grid place-items-center bg-neutral-950/0 text-white opacity-0 transition group-hover:bg-neutral-950/35 group-hover:opacity-100">
                                        <Instagram className="size-8" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                </main>

                <footer className="border-t border-neutral-200">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
                        <div>
                            <img
                                src={`${assetUrl}/main-logo.png`}
                                alt="MiniStore"
                                className="mb-5 h-8 w-auto"
                            />
                            <p className="max-w-sm text-sm leading-7 text-neutral-500">
                                Nisi, purus vitae, ultrices nunc. Sit ac sit
                                suscipit hendrerit. Gravida massa volutpat
                                aenean odio erat nullam fringilla.
                            </p>
                            <div className="mt-6 flex gap-4 text-neutral-500">
                                {[Facebook, Instagram, Twitter, Youtube].map(
                                    (Icon, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            aria-label="Social link"
                                            className="transition hover:text-[#79a4bb]"
                                        >
                                            <Icon className="size-5" />
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                                Quick Links
                            </h3>
                            <ul className="space-y-3 text-sm tracking-[0.12em] text-neutral-500 uppercase">
                                {[
                                    'Home',
                                    'About',
                                    'Shop',
                                    'Blogs',
                                    'Contact',
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="transition hover:text-[#79a4bb]"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                                Help & Info Help
                            </h3>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                {[
                                    'Track Your Order',
                                    'Returns Policies',
                                    'Shipping + Delivery',
                                    'Contact Us',
                                    'Faqs',
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="transition hover:text-[#79a4bb]"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                                Contact Us
                            </h3>
                            <p className="text-sm leading-7 text-neutral-500">
                                Do you have any queries or suggestions?{' '}
                                <a
                                    href="mailto:yourinfo@gmail.com"
                                    className="text-neutral-900"
                                >
                                    yourinfo@gmail.com
                                </a>
                            </p>
                            <p className="mt-3 text-sm leading-7 text-neutral-500">
                                If you need support? Just give us a call.{' '}
                                <a
                                    href="tel:+5511122233344"
                                    className="text-neutral-900"
                                >
                                    +55 111 222 333 44
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-neutral-200">
                        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-neutral-500 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
                            <p>We ship with: DHL, shippingcard</p>
                            <p>Payment options: Visa, Mastercard, Paypal</p>
                            <p>
                                Copyright 2023 MiniStore. Design by
                                TemplatesJungle
                            </p>
                        </div>
                    </div>
                </footer>

                <aside className="fixed right-5 bottom-5 hidden w-64 border border-neutral-200 bg-white p-5 shadow-xl xl:block">
                    <h2 className="text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase">
                        Browse Categories
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-500">
                        {categories.map((category) => (
                            <li key={category}>
                                <a
                                    href="#"
                                    className="transition hover:text-[#79a4bb]"
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </>
    );
}
