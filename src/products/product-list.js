import { samples } from './sample-items';

export class Local {
 constructor() {
   this.samples = samples.slice(0);
 }

  select(id) {
    alert(`Selected id: ${id}`);
  }

  rowSelected(selectionInfo) {
    // console.dir(selectionInfo);
  }

  editItem(event, item) {
    alert(`editing ${item.name}`);
    return Promise.resolve(true);
  }

  saveItem(event, item) {
    alert(`saving ${item.name}`);
    return true;
  }

  cancelItem(event, item) {
    alert(`cancelling ${item.name}`);
    return true;
  }

  deleteFirst() {
    this.samples.splice(0, 1);
    this.grid.refresh();
  }
}