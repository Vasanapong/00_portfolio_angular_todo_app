import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  noteData = {title:'',note:'',id:''}

  @Input() allNote:Array<any> = [];
  @Output() allNoteChange = new EventEmitter;

  @Input() appState = '';
  @Output() appStateChange = new EventEmitter;

  handleNoteChange(formData:any){
    if(formData.name === 'inputTitle') this.noteData.title = formData.value
    if(formData.name === 'inputNote') this.noteData.note = formData.value
  }

  handleSubmit(e:any){
    e.preventDefault();
    if(this.noteData.title !== '' && this.noteData.note !== ''){
      if(this.noteData.title.length > 15 || this.noteData.note.length > 15){
        alert('Maximum Characters is 15')
        return
      }
      let packedNoteData = {...this.noteData}
      packedNoteData.id = Date.now().toString()
      this.allNote.push(packedNoteData)
      this.allNoteChange.emit(this.allNote)
      this.noteData = {title:'',note:'',id:''}
      alert('Added Note Successfully !')
    }else{
      alert('Please Input Note Before Submit !')
    }
  }

  handleViewMode(){
    this.appState ='viewNote'
    this.appStateChange.emit(this.appState)
  }

}
