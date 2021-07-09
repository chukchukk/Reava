package com.threebrata.krok.services;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.threebrata.krok.Entity.Group;
import com.threebrata.krok.dto.GroupDTO;
import com.threebrata.krok.repository.GroupRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class GroupService {
    private final GroupRepository groupRepository;
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    public List<GroupDTO> add(String groupName) {
        Group group = gson.fromJson(groupName, Group.class);
        groupRepository.save(group);
        return getGroupsDTO();
    }

    public List<GroupDTO> getGroupsDTO(){
        List<Group> groups = groupRepository.findAll();

        List<GroupDTO> groupDTOS = new ArrayList<>();
        for(Group group: groups){
            GroupDTO temp = GroupDTO.create(group);
            groupDTOS.add(temp);
        }

        return groupDTOS;
    }
}
