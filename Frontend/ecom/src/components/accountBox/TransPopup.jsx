import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import  AddProductForm from "./AddProductF";
import { withStyles } from "@material-ui/core";
import { memo } from 'react';
import TransForm from "./TransForm";
const styles = (theme) => ({
 paper: {
  "borderRadius": 0
  },
});

class TransPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.handleClose= this.handleClose.bind(this)
  }

  handleClose() {
    console.log()
    // if (button !== "done") {
      // this.props.onClose();
    // } else {
    //   this.formRef.current.submitForm();
    // }
  }

  createCourseFromCourseForm(values) {
    //todo: create Course from values
    console.log(values)
    return {
      title: values.courseTitle,
      start: new Date(values.startTime),
      end: new Date(values.endTime),
      
    };
  }

  onSubmit(values) {
    this.props.onClose(this.createCourseFromCourseForm(values));
    this.props.open =false;
    
  }

  render() {
      console.log("popup e trans", this.props.transID);
    const { classes } = this.props;
    return (
      <div  >
        <Dialog

          style= {{
            "padding": "0px"
          }}
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <TransForm onclose={this.props.onClose} productID= {this.props.productID} transID={this.props.transID}/>
          </DialogContent>
         
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(memo(TransPopUp));
