package com.example.tasks.repository;

import java.util.List;
import com.example.tasks.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {


    @Query(value="Select * from task order by due_date desc",nativeQuery = true)
    public List<Task> getAllTaskDueDateDesc();


    @Query(value = "SELECT t FROM Task t WHERE t.type = 'done'")
    List<Task> findAllTasksByTypeDone();

}