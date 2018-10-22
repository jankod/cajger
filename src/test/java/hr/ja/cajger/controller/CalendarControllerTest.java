package hr.ja.cajger.controller;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class CalendarControllerTest {


    @Autowired
    CalendarControllerApi calendarController;

    @MockBean
    private RestTemplate template;

    @MockBean
    private MockMvc mockMvc;


    @Test
    public void testEvents() throws Exception {
//        mockMvc.perform(get("/cal/events")
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//        ).andExpect(status().isOk())
//                .andExpect(content().string(""));

    }
}
