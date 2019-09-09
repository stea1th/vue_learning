package de.stea1th.vue_learning.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(FirstController.class)
public class FirstControllerTest {

    @Autowired
    private MockMvc mvc;


    @Test
    public void getInput() throws Exception {
        mvc.perform(post("/first/test-input").param("name", "Vadim"))
                .andExpect(status().isOk())
                .andExpect(content().string("Vadim is ready!"));
    }
}
