import React, { useState } from "react";
import {
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
  Main,
} from "@material-ui/core";
import ProductDisplay from "./ProductDisplay";
import useStyles from "./ProductsStyles";

const Products = ({ reference, productInfo }) => {
  const [currentFilter, setCurrentFilter] = useState(false);
  const handleFilter = (event) => {
    setCurrentFilter(event.target.value);
  };
  
  const classes = useStyles();
  return (
    <main ref={reference}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="select-placeholder">
          Genre
        </InputLabel>
        <Select
          labelId="select-placeholder"
          id="simple-select"
          value={currentFilter}
          onChange={handleFilter}
          displayEmpty
        >
          <MenuItem value={false}>
            <em>All</em>
          </MenuItem>
          <MenuItem value="computer-science">Computer Science</MenuItem>
          <MenuItem value="finance">Finance</MenuItem>
          <MenuItem value="physics">Physics</MenuItem>
        </Select>
      </FormControl>

      <ProductDisplay productInfo={productInfo}/>
    </main>
  );
};

export default Products;
