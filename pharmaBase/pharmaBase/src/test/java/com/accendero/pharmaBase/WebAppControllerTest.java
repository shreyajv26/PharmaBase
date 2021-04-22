package com.accendero.pharmaBase;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class WebAppControllerTest {

	@Autowired
	private MockMvc mockMvc;
    private WebApplicationContext wac;
	
    @MockBean
    UserRepository userRepository;
    @MockBean
    ProductRepository productrepo;
    @MockBean
    CustomUserDetailsService customUserDetailsService;

    @LocalServerPort
    private int port;
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    private String getRootUrl() {
        return "http://localhost:" + port;
    }
    
    protected void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
     }
     protected String mapToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
     }
     protected <T> T mapFromJson(String json, Class<T> clazz)
        throws JsonParseException, JsonMappingException, IOException {
        
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, clazz);
     }
    
	
	
	@Test
	public void testaddProduct() throws Exception {
	   String uri = "/addproduct";
	   ProductFormData mockproduct = new ProductFormData();
	   	mockproduct.setApplNo("13456");
		mockproduct.setProductNo("12254");
		mockproduct.setForm("tablet");
		mockproduct.setDrugName("saridon");
		mockproduct.setMedCount("50");
		mockproduct.setRackNo("7820");
		
	   
	   String inputJson = mapToJson(mockproduct);
	   MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(uri)
	      .contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
	   
	   int status = mvcResult.getResponse().getStatus();
	   assertEquals(200, status);
	}
	
}
