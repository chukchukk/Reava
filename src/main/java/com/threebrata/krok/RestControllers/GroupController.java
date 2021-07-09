package com.threebrata.krok.RestControllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.threebrata.krok.Entity.Group;
import com.threebrata.krok.Entity.User;
import com.threebrata.krok.dto.GroupDTO;
import com.threebrata.krok.repository.GroupRepository;
import com.threebrata.krok.services.GroupService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/group")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class GroupController {
    private final GroupService groupService;

    @PostMapping("/addGroup")
    public List<GroupDTO> addGroup(@RequestBody String groupName){
        return groupService.add(groupName);
    }

//    @PostMapping("/addStudentGroup")
//    public List<User> addStudentGroup

    @GetMapping("/takeGroups")
    public List<GroupDTO> getGroups(){
        return groupService.getGroupsDTO();
    }
}
