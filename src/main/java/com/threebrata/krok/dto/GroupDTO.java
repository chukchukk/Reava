package com.threebrata.krok.dto;

import com.threebrata.krok.Entity.Group;
import com.threebrata.krok.Entity.User;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
public class GroupDTO {
    private String groupName;
    private List<StudentDTO> students;

    public static GroupDTO create(Group group){
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setGroupName(group.getGroupName());
        groupDTO.setStudents(StudentDTO.studentToDTO(group.getStudents()));
        return groupDTO;
    }
}
