package com.threebrata.krok.RestControllers;

import com.threebrata.krok.Entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StartController {

    @GetMapping("/checkUser")
    public String checkUser(
            @ModelAttribute User user
//            , @RequestParam(value = "login", required = false) String login
//            , @RequestParam(value = "password", required = false) String password
    ) {
        if (user!=null){
            System.out.println(user.getLogin());
            if(user.getLogin().equals("1") && user.getPassword().equals("1"))
                return "true";
        }


        return "false";
    }

}
