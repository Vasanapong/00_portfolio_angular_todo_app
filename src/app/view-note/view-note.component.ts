import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() allNote: Array<any> = [];
  @Output() allNoteChange = new EventEmitter;

  @Input() appState = '';
  @Output() appStateChange = new EventEmitter;

  @Input() editNote = { title: '', note: '', id: '' }
  @Output() editNoteChange = new EventEmitter

  handleDelete(item: any) {
    this.allNote = this.allNote.filter(note => note.id !== item.id)
    this.allNoteChange.emit(this.allNote)
  }

  handleEdit(item: any) {
    this.editNote = item
    this.appState = 'editNote'
    this.editNoteChange.emit(this.editNote)
    this.appStateChange.emit(this.appState)
  }

  handleViewMode() {
    this.appState = 'addNote'
    this.appStateChange.emit(this.appState)
  }

}
