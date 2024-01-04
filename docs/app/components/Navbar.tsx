import React from "@/createElement.js";

export default function Navbar() {
  return (
    <nav class="p-4 shadow-lg">
      <ul class="flex space-x-4">
        <li>
          <a href="/" class="hover:bg-gray-100 px-4 py-3 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="/tutorial" class="hover:bg-gray-100 px-4 py-3 rounded">
            Tutorial
          </a>
        </li>
      </ul>
    </nav>
  );
}
