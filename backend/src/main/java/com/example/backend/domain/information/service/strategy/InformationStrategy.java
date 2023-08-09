package com.example.backend.domain.information.service.strategy;

import com.example.backend.domain.information.dto.CommonResponse;
import lombok.RequiredArgsConstructor;

import java.util.List;

public interface InformationStrategy {
    List<CommonResponse> findAll();
    StrategyName getStrategyName();

    enum StrategyName {
        POWERTRAIN("powertrain"),
        BODYTYPE("bodytype"),
        DRIVING_SYSTEM("driving-system"),
        EXTERIOR_COLOR("exterior-color"),
        INTERIOR_COLOR("interior-color"),
        WHEEL("wheel"),
        ADDITIONAL_OPTION("additional-option");
        private String requestUri;

        StrategyName(String requestUri) {
            this.requestUri = requestUri;
        }
    }
}
