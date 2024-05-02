import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from '../../../services/task.service';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent implements OnInit {

  tasks: Observable<Array<ITask>> | undefined;
  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this.tasks = this.taskService.getTaskDone();
  }

  onOpenDialog(task: ITask) {
    const dialogRef = this.dialog.open(ShowComponent, {
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
    });
  }
}
