import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() allNote:Array<any> = [];
  @Output() allNoteChange = new EventEmitter;

  @Input() appState = '';
  @Output() appStateChange = new EventEmitter;

  @Input() editNote = {title:'',note:'',id:''}
  @Output() editNoteChange = new EventEmitter
  
  handleEditNoteChange(formData:any){
    if(formData.name === 'inputTitle') this.editNote.title = formData.value
    if(formData.name === 'inputNote') this.editNote.note = formData.value
  }

  handleEditSubmit(e:any){
    e.preventDefault();
    this.allNote = this.allNote.map(note=>{
      if(note.id === this.editNote.id) return this.editNote
      return note
    })
    this.allNoteChange.emit(this.allNote)
    this.appState ='viewNote'
    this.appStateChange.emit(this.appState)
  }

  handleViewMode(){
    this.appState ='viewNote'
    this.appStateChange.emit(this.appState)
  }

}
