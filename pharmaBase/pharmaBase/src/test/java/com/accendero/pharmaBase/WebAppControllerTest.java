package com.accendero.pharmaBase;

import java.net.URI;
import java.net.URISyntaxException;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
public class WebAppControllerTest {
     
    @Test
    public void testAddProduct() throws URISyntaxException 
    {
    	
    	RestTemplate restTemplate = new RestTemplate();
        
        final String baseUrl = "http://localhost:8080" + "/addproduct";
        URI uri = new URI(baseUrl);
        
        ProductFormData editP=new ProductFormData();
		//Optional<ProductFormData> p  = productrepo.findById(Long.parseLong(item_id));
	            
		editP.setItemId(Long.parseLong(35908+""));
		editP.setProductNo("45646");
		editP.setDrugName("Tester");
		editP.setMedCount("20");
		editP.setRackNo("766");
     
		HttpHeaders headers = new HttpHeaders();
		 
	    HttpEntity<ProductFormData> request = new HttpEntity<>(editP, headers);
	     
	    try
	    {
	        restTemplate.postForEntity(uri, request, String.class);
	        Assert.fail();
	    }
	    catch(HttpClientErrorException ex) 
	    {
	        //Verify bad request and missing header
	        Assert.assertEquals(400, ex.getRawStatusCode());
	        Assert.assertEquals(true, ex.getResponseBodyAsString().contains("Missing request header"));
	    }
	}
        
    
}
