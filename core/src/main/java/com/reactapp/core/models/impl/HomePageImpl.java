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

package com.reactapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.HomePage;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    HomePage.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/home-page")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HomePageImpl
    implements HomePage
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image logoImage;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleText1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleText2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleText3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleText4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraphText1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraphText2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraphText3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraphText4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footerText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String refreshText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String navigateButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logoutText;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("logoImage")
    public Image getLogoImage() {
        return logoImage;
    }

    @Override
    @JsonProperty("titleText1")
    public String getTitleText1() {
        return titleText1;
    }

    @Override
    @JsonProperty("titleText2")
    public String getTitleText2() {
        return titleText2;
    }

    @Override
    @JsonProperty("titleText3")
    public String getTitleText3() {
        return titleText3;
    }

    @Override
    @JsonProperty("titleText4")
    public String getTitleText4() {
        return titleText4;
    }

    @Override
    @JsonProperty("paragraphText1")
    public String getParagraphText1() {
        return paragraphText1;
    }

    @Override
    @JsonProperty("paragraphText2")
    public String getParagraphText2() {
        return paragraphText2;
    }

    @Override
    @JsonProperty("paragraphText3")
    public String getParagraphText3() {
        return paragraphText3;
    }

    @Override
    @JsonProperty("paragraphText4")
    public String getParagraphText4() {
        return paragraphText4;
    }

    @Override
    @JsonProperty("footerText")
    public String getFooterText() {
        return footerText;
    }

    @Override
    @JsonProperty("refreshText")
    public String getRefreshText() {
        return refreshText;
    }

    @Override
    @JsonProperty("navigateButtonText")
    public String getNavigateButtonText() {
        return navigateButtonText;
    }

    @Override
    @JsonProperty("logoutText")
    public String getLogoutText() {
        return logoutText;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
