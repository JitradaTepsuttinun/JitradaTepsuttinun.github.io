import { useState, useRef } from "react";
import accessoryData from "./accessory.json";
import DataTable from "./components/DataTable";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // For a component, it must return a single JSX element.
  // So if you have multiple elements, you need to wrap them in a single element.
  // You can use <>...</> to wrap multiple elements (only in JSX).

  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([]);
  // const [sortedSelectedItems, setSortedSelectedItems] = useState([]);

  const quantityRef = useRef();
  const productRef = useRef();
  const [price, setPrice] = useState(accessoryData[0].price);


  const handleSubmit = (e) => {
    const productId = parseInt(productRef.current.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productId
    );
    const order = {
      // id: product.id,
      // name: product.name,
      // price: product.price,
      ...product,
      quantity: quantityRef.current.value,
    };
    console.table(order);
    selectedItems.push(order); // this does not update DataTable, why?
    // setSelectedItems(selectedItems) // not working, it is the same reference to the array.
    setSelectedItems([...selectedItems]); // this works, it creates new array
    setFilteredSelectedItems([...selectedItems]); 
  };

  const deleteItemByIndex = (index) => {
    selectedItems.splice(index, 1); // this does not update DataTable, why?
    setSelectedItems([...selectedItems]); // this works, it creates new array
    setFilteredSelectedItems([...selectedItems]); 
  }

  const filter = (keyword) => {
    const filteredItems = selectedItems.filter((item) => item.name.includes(keyword))
    setFilteredSelectedItems(filteredItems)
  }

  const sortAsc = () => {
    const sortedSelectedItems = filteredSelectedItems.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
    });
    setFilteredSelectedItems([...sortedSelectedItems])
  }

  const sortDes = () => {
    const sortedSelectedItems = filteredSelectedItems.sort((a, b) => {
      if (a.name < b.name) return 1
      if (a.name > b.name) return -1
    })
    setFilteredSelectedItems([...sortedSelectedItems])
  }

  const updatePrice = (e) => {
    const productId = parseInt(e.target.value); // Integer expected
    const product = accessoryData.find(
      (accessory) => accessory.id === productId
    );
    setPrice(product.price);
  };

  // console.table(accessoryData)

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}> Product: </Col>
          <Col xs={10}>
            <select ref={productRef} onChange={updatePrice}>
              {accessoryData.map((accessory, index) => (
                <option key={index} value={accessory.id}>
                  {accessory.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs={2}> Price: </Col>
          <Col xs={10}> {price} </Col>
        </Row>
        <Row>
          <Col xs={2}> Quantity: </Col>
          <Col xs={10}>
            <input type="number" ref={quantityRef} defaultValue={1} />{" "}
          </Col>
        </Row>
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>

      <Container>
        <DataTable 
          data={filteredSelectedItems} 
          onDelete={deleteItemByIndex}
          onFilter={filter}
          onSortAsc={sortAsc}
          onSortDes={sortDes}
          />
      </Container>
      {/* <div className="container">
        <div className="row">
          <div className="col-2"> Product: </div>
          <div className="col-10">
            <select ref={productRef} onChange={updatePrice}>
              {accessoryData.map((accessory, index) => (
                <option key={index} value={accessory.id}>
                  {accessory.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2"> Price: </div>
          <div className="col-10"> {price} </div>

          <div className="col-2"> Quantity: </div>
          <div className="col-10">
            <input type="number" ref={quantityRef} defaultValue={1} />{" "}
          </div>
        </div>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>

      <DataTable data={selectedItems} />  */}
    </>
  );
}

export default App;
