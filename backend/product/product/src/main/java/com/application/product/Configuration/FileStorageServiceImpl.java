package com.application.product.Configuration;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FileStorageServiceImpl implements FileStorageService{

    private Path root = Paths.get("uploads");

    @Override
    public void init() {
        try{
            Files.createDirectories(root);
        }catch (IOException e){
            throw new RuntimeException("Failed to create upload repository");
        }
    }

    @Override
    public void save(MultipartFile multipartFile) {
        try{
            Files.copy(multipartFile.getInputStream(), this.root.resolve(multipartFile.getOriginalFilename()));

        }catch (IOException e){
            if(e instanceof FileAlreadyExistsException){
                throw new RuntimeException("A file with that name already exist");
            }
        }

    }

    @Override
    public Resource load(String fileName) {
        return null;
    }

    @Override
    public void deleteAll() {

    }

    @Override
    public Stream<Path> loadAll() {
        return null;
    }
}
