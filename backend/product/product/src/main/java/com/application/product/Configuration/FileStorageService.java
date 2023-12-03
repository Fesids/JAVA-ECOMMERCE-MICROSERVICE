package com.application.product.Configuration;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface FileStorageService {

    void init();

    void save(MultipartFile multipartFile);

    Resource load(String fileName);

    void deleteAll();

    public Stream<Path> loadAll();



}
