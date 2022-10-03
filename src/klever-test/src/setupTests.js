import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import Home from './components/__test__/Home.test';
import Add from './components/__test__/Add.test';
import Edit from './components/__test__/Edit.test';

it("renders all the basic of the pages without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home><Add><Edit></Edit></Add></Home>, div);
});