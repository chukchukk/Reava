package com.threebrata.krok.dto;

import com.threebrata.krok.Entity.User;
import lombok.Data;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Data
public class StudentDTO {
    private String login;

    public static List<StudentDTO> studentToDTO(List<User> userList){
        List<StudentDTO> sdto = new ArrayList<>();
        for(User user: userList){
            StudentDTO temp = new StudentDTO();
            temp.setLogin(user.getLogin());
            sdto.add(temp);
        }

        return sdto;
    }
}
