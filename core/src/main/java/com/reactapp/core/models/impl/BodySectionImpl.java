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
import com.reactapp.core.models.BodySection;
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
    BodySection.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/body-section")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BodySectionImpl
    implements BodySection
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image image;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonText;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("image")
    public Image getImage() {
        return image;
    }

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("buttonText")
    public String getButtonText() {
        return buttonText;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
