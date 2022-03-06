package com.zijian.employeeManager.repo;

import com.zijian.employeeManager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository <Employee,Long> {
}
