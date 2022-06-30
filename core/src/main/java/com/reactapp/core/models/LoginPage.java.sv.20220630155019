/*
 * ***********************************************************************
 * Reactapp CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Reactapp.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Reactapp and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Reactapp
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Reactapp.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code LoginPage} Sling Model used for the {@code reactapp/components/login-page} component.
 * 
 */
@ConsumerType
public interface LoginPage
    extends ComponentExporter
{


    @JsonProperty("logoImage")
    com.adobe.cq.wcm.core.components.models.Image getLogoImage();

    @JsonProperty("backgroundImage")
    com.adobe.cq.wcm.core.components.models.Image getBackgroundImage();

    @JsonProperty("title")
    String getTitle();

    @JsonProperty("paragraph")
    String getParagraph();

    @JsonProperty("buttonName")
    String getButtonName();

}
