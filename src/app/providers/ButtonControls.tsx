import {Component} from "react";
import Controller from '../controllers/ButtonControls'

export default class ButtonControls extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return <Controller/>;
  }
}