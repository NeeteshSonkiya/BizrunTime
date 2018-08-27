package com.bizruntime;

public class AVariable {

	private Double varValue = 0.0;
	private String varName = null;
	
	public Double getVarValue() {
		return varValue;
	}

	public void setVarValue(Double varValue) {
		this.varValue = varValue;
	}

	public String getVarName() {
		return varName;
	}

	public void setVarName(String varName) {
		this.varName = varName;
	}

	
	
	public AVariable(String varName, Double varValue)
	{
		this.varName = varName;
		this.varValue = varValue;
	}
}
