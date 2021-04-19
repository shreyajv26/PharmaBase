package com.accendero.pharmaBase;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "Products_Data")
public class ProductFormData {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="item_id")
	private String itemId;
	
	@Column(name="appl_no")
	private String applNo;
	
	@Column(name="product_no")
    private String productNo;
	
	@Column(name="form")
    private String form;
	
	@Column(name="drug_name")
    private String drugName;
	
	@Column(name="med_count")
    private String medCount;
	
	@Column(name="rack_no")
    private String rackNo;

	

	public String getItemId() {
		return itemId;
	}


	public void setItemId(String itemId) {
		this.itemId = itemId;
	}


	public String getApplNo() {
		return applNo;
	}


	public void setApplNo(String applNo) {
		this.applNo = applNo;
	}


	public String getProductNo() {
		return productNo;
	}


	public void setProductNo(String productNo) {
		this.productNo = productNo;
	}


	public String getForm() {
		return form;
	}


	public void setForm(String form) {
		this.form = form;
	}


	public String getDrugName() {
		return drugName;
	}


	public void setDrugName(String drugName) {
		this.drugName = drugName;
	}


	public String getMedCount() {
		return medCount;
	}


	public void setMedCount(String medCount) {
		this.medCount = medCount;
	}


	public String getRackNo() {
		return rackNo;
	}


	public void setRackNo(String rackNo) {
		this.rackNo = rackNo;
	}


	@Override
	public String toString() {
		return "ProductFormData [applNo=" + applNo + ", productNo=" + productNo + ", form=" + form + ", drugName="
				+ drugName + ", medCount=" + medCount + ", rackNo=" + rackNo + "]";
	}
    
    
	
}
