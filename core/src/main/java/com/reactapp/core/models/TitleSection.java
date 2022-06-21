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
 * Defines the {@code TitleSection} Sling Model used for the {@code reactapp/components/title-section} component.
 * 
 */
@ConsumerType
public interface TitleSection
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("paragraph")
    String getParagraph();

}
