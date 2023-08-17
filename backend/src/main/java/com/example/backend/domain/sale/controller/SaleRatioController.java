package com.example.backend.domain.sale.controller;

import com.example.backend.domain.global.dto.ResponseDto;
import com.example.backend.domain.global.model.enums.ResultCode;
import com.example.backend.domain.sale.dto.SalesSummaryResponse;
import com.example.backend.domain.sale.service.SelfModeServiceFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/sale")
public class SaleRatioController {
    private final SelfModeServiceFactory selfModeServiceFactory;

    @GetMapping("{target:exterior-color|interior-color|wheel}")
    public ResponseEntity<ResponseDto<List<SalesSummaryResponse>>> returnSelectionRatioInSelfMode(
            @PathVariable String target
    ) {
        List<SalesSummaryResponse> result = selfModeServiceFactory.getSelectionRatio(target);
        return mapToOKResponse(result);
    }

    @GetMapping(value = "{target:powertrain|bodytype|driving-system}")
    public ResponseEntity<ResponseDto<List<SalesSummaryResponse>>> returnVehicleSpecificationSelectionRatioInSelfMode(
            @PathVariable String target
    ) {
        List<SalesSummaryResponse> result = selfModeServiceFactory.getVehicleSpecificationSaleRatio(target);
        return mapToOKResponse(result);
    }

    @GetMapping("additional-option")
    public ResponseEntity<ResponseDto<List<SalesSummaryResponse>>> returnOptionSelectionRatioInSelfMode(
            @RequestParam("category") String category
    ) {
        List<SalesSummaryResponse> result = selfModeServiceFactory.getOptionSelectionRatio(category);
        return mapToOKResponse(result);
    }

    private ResponseEntity<ResponseDto<List<SalesSummaryResponse>>> mapToOKResponse(List<SalesSummaryResponse> result) {
        ResponseDto<List<SalesSummaryResponse>> body = ResponseDto.of(result, ResultCode.SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).body(body);
    }
}
