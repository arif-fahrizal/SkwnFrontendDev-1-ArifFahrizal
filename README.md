Furniture Landing Page
This project is a furniture landing page featuring a dynamic carousel to showcase various furniture items. The carousel allows users to navigate through different products, with interactive hover effects to enlarge items and display product details. Built using HTML, CSS, and jQuery, this page fetches product data from an API and provides a responsive and engaging user experience.

Features
Dynamic Carousel: Displays furniture items fetched from an external API.
Responsive Design: Adapts to different screen sizes including mobile, tablet, and desktop.
Interactive Hover Effects: Enlarges the active item and displays product details on hover.
Smooth Animations: Includes smooth transitions, ease-in-out effects, and animations for carousel navigation.
API Integration: Fetches data from Mock API.
How to Start the Project
To get started with the project, follow these steps:

Clone the Repository

Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/furniture-landing-page.git
Navigate to the Project Directory

Change your working directory to the project folder:

bash
Copy code
cd furniture-landing-page
Open the Project

Open the index.html file in your preferred web browser to view the landing page:

bash
Copy code
open index.html
Install Dependencies

This project does not require any additional dependencies. Simply opening index.html in your browser should be sufficient to view the project.

Usage
Navigate the Carousel: Use the previous and next buttons to scroll through the furniture items.
Hover Effects: Hover over a product to view an enlarged version and see product details such as name and price.
Responsive Layout: The page adjusts to various screen sizes to ensure a good user experience on mobile, tablet, and desktop devices.
API Endpoint
The furniture data is fetched from the following API endpoint:

GET: https://66dc7a6747d749b72acbace6.mockapi.io/furniture
Sample Response Structure:

json
Copy code
[
  {
    "id": "1",
    "nama": "Und Chair",
    "harga": "329",
    "image": "https://image-link.com/1.png"
  },
  ...
]
File Structure
bash
Copy code
furniture-landing-page/
├── assets/               # Image and icon assets
│   └── (your images here)
├── css/                  # Custom styles
│   └── style.css
├── js/                   # JavaScript and jQuery
│   └── script.js
├── index.html            # Main HTML file
└── README.md             # Project readme file
Customization
API Endpoint: Change the API endpoint in script.js if you want to fetch data from a different source.
Styling: Modify style.css to adjust the look and feel of the landing page.
JavaScript: Update script.js to add or modify functionality, such as animations or carousel behavior.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
