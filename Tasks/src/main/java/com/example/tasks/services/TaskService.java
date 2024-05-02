package com.example.tasks.services;

import java.util.List;
import java.util.Optional;

import com.example.tasks.model.Task;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.tasks.repository.TaskRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;

    @Transactional(readOnly = true)
    public List<Task> getTasks(){
        return taskRepository.getAllTaskDueDateDesc();
    }
    @Transactional(readOnly = true)
    public List<Task> getTasksDone(){
        return taskRepository.findAllTasksByTypeDone();
    }

    @Transactional
    public Task save(Task task) {
        return taskRepository.saveAndFlush(task);
    }
    @Transactional(readOnly = true)
    public boolean existById(Long id) {
        return taskRepository.existsById(id);
    }
    @Transactional(readOnly = true)
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }
    public void delete(Long id) {
        taskRepository.deleteById(id);
    }



}