package de.stea1th.vue_learning;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {

    @GetMapping("/first")
    public String getFirst(){
        return "first";
    }

    @GetMapping("/chess")
    public String getChess(){
        return "chess";
    }
}
