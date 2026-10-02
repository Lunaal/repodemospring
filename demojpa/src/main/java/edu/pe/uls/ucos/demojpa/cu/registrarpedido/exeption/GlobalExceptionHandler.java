package edu.pe.uls.ucos.demojpa.cu.registrarpedido.exeption;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import edu.pe.uls.ucos.demojpa.cu.registrarpedido.exeption.StockInsuficienteException;

@RestControllerAdvice
public class GlobalExceptionHandler { 
	
    @ExceptionHandler(StockInsuficienteException.class) 
	public ResponseEntity<String> manejarProductoNoEncontrado( 
		StockInsuficienteException ex) { 
		return ResponseEntity .status(HttpStatus.NOT_FOUND) .body(ex.getMessage()); 
	}

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleValidation(
            MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.joining(", "));
        return ResponseEntity.badRequest().body(message);
    }

    @ExceptionHandler(RuntimeException.class) 
	public ResponseEntity<String> manejarRuntimeException( 
		RuntimeException ex) { 
		return ResponseEntity .status(HttpStatus.INTERNAL_SERVER_ERROR) .body(ex.getMessage()); 
	}
}