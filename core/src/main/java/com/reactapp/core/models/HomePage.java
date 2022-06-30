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
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code HomePage} Sling Model used for the {@code reactapp/components/home-page} component.
 * 
 */
@ConsumerType
public interface HomePage
    extends ComponentExporter
{


    @JsonProperty("logoImage")
    Image getLogoImage();

    @JsonProperty("titleText1")
    String getTitleText1();

    @JsonProperty("titleText2")
    String getTitleText2();

    @JsonProperty("titleText3")
    String getTitleText3();

    @JsonProperty("titleText4")
    String getTitleText4();

    @JsonProperty("paragraphText1")
    String getParagraphText1();

    @JsonProperty("paragraphText2")
    String getParagraphText2();

    @JsonProperty("paragraphText3")
    String getParagraphText3();

    @JsonProperty("paragraphText4")
    String getParagraphText4();

    @JsonProperty("footerText")
    String getFooterText();

    @JsonProperty("refreshText")
    String getRefreshText();

    @JsonProperty("navigateButtonText")
    String getNavigateButtonText();

    @JsonProperty("logoutText")
    String getLogoutText();

}
