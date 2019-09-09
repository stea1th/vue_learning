package de.stea1th.vue_learning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/first")
public class FirstController {

    @PostMapping("/test-input")
    @ResponseBody
    public String getInput(@RequestParam(value = "name") String name){
//        System.out.println(name);
        return name + " is ready!";

    }



}
