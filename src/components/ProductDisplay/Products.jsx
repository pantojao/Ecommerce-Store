import React, {useState} from "react";
import { Grid, Typography, MenuItem, Select, InputLabel, FormHelperText, FormControl, Main  } from "@material-ui/core";
import ProductDisplay from './ProductDisplay'



const Products = ({reference, productInfo}) => {
  const [currentFilter, setCurrentFilter] = useState('')
  const handleFilter = (event) => {
    setCurrentFilter(event.target.filter)
  }
  return (
    <main ref={reference}>
      <FormControl >
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
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value='computer'>Computer</MenuItem>
            <MenuItem value='finance'>Finance</MenuItem>
            <MenuItem value='physics'>Physics</MenuItem>
          </Select>
          <FormHelperText>{currentFilter}</FormHelperText>
      </FormControl>
    
      <ProductDisplay productInfo={productInfo} filter={false}/>
    </main>

  )
};

export default Products;
