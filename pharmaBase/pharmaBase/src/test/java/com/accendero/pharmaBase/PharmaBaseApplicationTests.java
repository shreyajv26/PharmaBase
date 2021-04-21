package com.accendero.pharmaBase;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class PharmaBaseApplicationTests {
	
	@Autowired
    private TestRestTemplate restTemplate;
	
	@LocalServerPort
    private int port;
	
	private String getRootUrl() {
        return "http://localhost:" + port;
    }

    @Test
    public void contextLoads() {

    }

    @Test
    public void testgetAllProducts() {
    	HttpHeaders headers = new HttpHeaders();
       HttpEntity<String> entity = new HttpEntity<String>(null, headers);
       ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/listproduct",
       HttpMethod.GET, entity, String.class);  
       assertNotNull(response.getBody());
   }


   @Test
   public void testaddProduct() {
	   ProductFormData product = new ProductFormData();
	   product.setApplNo("13456");
	   product.setProductNo("12254");
	   product.setForm("tablet");
	   product.setDrugName("saridon");
	   product.setMedCount("50");
	   product.setRackNo("7820");
       ResponseEntity<ProductFormData> postResponse = restTemplate.postForEntity(getRootUrl() + "/addproduct", product, ProductFormData.class);
       //assertNotNull(postResponse);
       assertNotNull(postResponse.getBody());
   }

   @Test
   public void testupdateProduct() {
       int id = 1;
       ProductFormData product = restTemplate.getForObject(getRootUrl() + "/updateproduct/" + id, ProductFormData.class);
       product.setMedCount("300");
       product.setRackNo("100");
       restTemplate.put(getRootUrl() + "/updateproduct/" + id, product);
       ProductFormData updatedProduct = restTemplate.getForObject(getRootUrl() + "/updateproduct/" + id, ProductFormData.class);
       assertNotNull(updatedProduct);
   }

   @Test
   public void testDeleteEmployee() {
        int id = 2;
        ProductFormData product = restTemplate.getForObject(getRootUrl() + "/employees/" + id, ProductFormData.class);
        assertNotNull(product);
        restTemplate.delete(getRootUrl() + "/deleteproduct/" + id);
        try {
        	product = restTemplate.getForObject(getRootUrl() + "/employees/" + id, ProductFormData.class);
        } catch (final HttpClientErrorException e) {
             assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
        }
   }
}


