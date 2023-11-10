import React, { useState } from "react";
import {
  DropdownButton,
  Card,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import "./Products.css";

import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { BsInfoCircle } from "react-icons/bs";

const Products = ({ setTotalPrice, setTotalPriceVisible }) => {
  const [cart, setCart] = useState([]); // State to track the items in the cart
  const [selectedColors, setSelectedColors] = useState({});
  const [showHelpModal, setShowHelpModal] = useState(false);
  const dispatch = useDispatch();
  const [selectedShipmentMethod, setSelectedShipmentMethod] = useState(null);

  // Product data, an array of product objects
  const products = [
    {
      id: 1,
      name: "Basketball",
      description: "High-quality basketball for indoor and outdoor play.",
      price: 249.99,
      colors: ["Red"],
      image: {
        src: "https://down-ph.img.susercontent.com/file/adc9576c49d3eeb249828c499ce3bc12",
        alt: "Basketball Image", // Descriptive alt text for accessibility
      },
    },
    {
      id: 2,
      name: "Cycling Helmet",
      description: "Aerodynamic cycling helmet for safety on the road.",
      price: 149.99,
      colors: ["Blue", "Purple", "Green"],
      image: {
        src: "https://m.media-amazon.com/images/I/712fnQq8G+L._AC_UF1000,1000_QL80_.jpg",
        alt: "Cycling Helmet Image",
      },
    },
    {
      id: 3,
      name: "Running Shoes",
      description: "Lightweight Running Shoes for Men and Women",
      price: 399.99,
      colors: ["Black/White", "Blue/Orange", "Gray/Pink"],
      image: {
        src: "https://cdn.outsideonline.com/wp-content/uploads/2021/07/Super_shoe_showdown_s.jpg",
        alt: "Running Shoes Image",
      },
    },
    {
      id: 4,
      name: "Tennis Racket",
      description: "High-performance racket for power and control.",
      price: 299.99,
      colors: ["Black", "White"],
      image: {
        src: "https://i.ebayimg.com/images/g/Y1IAAOSw0UZkm-AH/s-l1200.webp",
        alt: "Tennis Racket Image",
      },
    },
    {
      id: 5,
      name: "Golf Clubs Set",
      description:
        "Complete set of high-quality golf clubs for distance and accuracy.",
      price: 5000.0,
      colors: ["Gray/Black"],
      image: {
        src: "https://m.media-amazon.com/images/I/61IaVsg2eYL._AC_UF894,1000_QL80_.jpg",
        alt: "Golf Clubs Set Image",
      },
    },
    {
      id: 6,
      name: "Soccer Ball",
      description:
        "Top-quality soccer ball for practice sessions and competitive matches.",
      price: 199.99,
      colors: ["Black", "Red", "Blue"],
      image: {
        src: "https://cdn11.bigcommerce.com/s-v9unk13j/images/stencil/1280x1280/products/4703/16724/A-94300-2__19372.1686328678.jpg?c=2",
        alt: "Soccer Ball Image",
      },
    },
    {
      id: 7,
      name: "Swimming Goggles",
      description: "Anti-fog swimming goggles for clear underwater vision.",
      price: 80.0,
      colors: ["Purple", "Green", "Blue"],
      image: {
        src: "https://m.media-amazon.com/images/I/71cbonX960L._AC_UY780_.jpg",
        alt: "Swimming Goggles Image",
      },
    },
    {
      id: 8,
      name: "Boxing Gloves",
      description: "Premium boxing gloves for training and sparring.",
      price: 499.99,
      colors: ["Yellow", "Red", "Black"],
      image: {
        src: "https://m.media-amazon.com/images/I/71RwSmcxERL._AC_UF1000,1000_QL80_.jpg",
        alt: "Boxing Gloves Image",
      },
    },
    {
      id: 9,
      name: "Water Bottle",
      description: "Insulated Water Bottle with Straw Lid",
      price: 45.0,
      colors: ["Blue", "Pink", "Black"],
      image: {
        src: "https://m.media-amazon.com/images/I/715TaA0AMJL.jpg",
        alt: "Water Bottle Image",
      },
    },
    {
      id: 10,
      name: "Golf Ball Set",
      description: "Premium golf balls for distance and accuracy.",
      price: 199.99,
      colors: ["White"],
      image: {
        src: "https://static.golfballs.com/C/800x800/Products/Legacy/58/Callaway-Golf-Speed-Regime-25-Blem-Golf-Balls_Default_raw.webp",
        alt: "Golf Ball Set Image",
      },
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
    setTotalPriceVisible(true);
    dispatch(addToCart(product));
  };

  const handleColorSelect = (product, color) => {
    setSelectedColors({
      ...selectedColors,
      [product.id]: color,
    });
  };

  const handleHelpClick = () => {
    setShowHelpModal(!showHelpModal);
  };

  const HelpModal = () => {
    return (
      <Modal show={showHelpModal} onHide={handleHelpClick}>
        <Modal.Header closeButton>
          <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your help content here */}
          <h3>Shipping Options</h3>
          <p>Our store provides two shipping methods to cater to your needs:</p>
          <p>
            Standard Shipping: Reliable and cost-effective. Estimated delivery
            time may vary based on your location.
          </p>
          <p>
            Express Shipping: Swift and expedited delivery. Ideal for those who
            need their items promptly.
          </p>
          <p>
            Feel free to choose the shipping method that best suits your
            requirements.
          </p>
          <p>
            If you have any further questions or need assistance, please contact
            our support team at support@sportsfever.com. Your satisfaction is
            our priority!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHelpClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleShipmentMethodSelect = (method) => {
    setSelectedShipmentMethod(method);
  };

  return (
    <div style={{ marginTop: "85px" }}>
      <div>
        {/* Page Heading */}
        <h1 className="heading ms-3 mt-3" style={{ color: "lightgrey" }}>
          Products
        </h1>

        {/* Shipment Method Dropdown */}
        <div className="ms-3 mt-3">
          <DropdownButton
            id="shipment-method-dropdown"
            title={`Shipment Method: ${
              selectedShipmentMethod || "Choose Method"
            }`}
            variant="secondary"
          >
            <Dropdown.Item
              onClick={() => handleShipmentMethodSelect("Standard")}
            >
              Standard
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleShipmentMethodSelect("Express")}
            >
              Express
            </Dropdown.Item>
          </DropdownButton>
        </div>

        {/* Help button */}
        <div className="ms-3 mt-3">
          <Button variant="secondary" onClick={handleHelpClick}>
            <BsInfoCircle /> Help
          </Button>
          {/* Help Modal */}
          <HelpModal />
        </div>

        {/* Container for product cards, centered in text-center */}
        <div className="container">
          {/* Flex container to arrange products side by side */}
          <div className="row">
            {" "}
            {/* Use flex container */}
            {/* Mapping through products and creating a card for each */}
            {products.map((product) => (
              <Card key={product.id} style={{ width: "18rem", margin: "5px" }}>
                <Card.Img
                  variant="top"
                  src={product.image.src} // Image source URL
                  alt={product.image.alt} // Image alt text for accessibility
                  className="custom-image"
                />
                <Card.Body>
                  {/* To display the product name as the card title */}
                  <Card.Title>{product.name}</Card.Title>

                  {/* To show the product description */}
                  <Card.Text>{product.description}</Card.Text>
                  {/* To display the product price with 'R' and 2 decimal places */}
                  <Card.Text>Price: R{product.price.toFixed(2)}</Card.Text>

                  {/* Dropdown button for color selection */}
                  <Dropdown as={ButtonGroup}>
                    {/* To display the selected color or "Choose Color" if no color is selected */}
                    <Button variant="secondary">
                      {selectedColors[product.id] || "Choose Color"}
                    </Button>

                    {/* Toggle button for the color selection dropdown */}
                    <Dropdown.Toggle
                      split
                      variant="secondary"
                      id="dropdown-split-basic"
                    />

                    {/* Dropdown menu for available colors */}
                    <Dropdown.Menu>
                      {/* Mapping through available colors in dropdown */}
                      {product.colors.map((color) => (
                        <Dropdown.Item
                          key={color}
                          onClick={() => handleColorSelect(product, color)}
                        >
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Button to add the product to the cart */}
                  <Button onClick={() => handleAddToCart(product)}>Buy</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
