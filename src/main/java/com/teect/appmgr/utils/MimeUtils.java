package com.teect.appmgr.utils;

import java.io.File;

import javax.activation.MimetypesFileTypeMap;

public final class MimeUtils {
	private static MimetypesFileTypeMap MIME_TYPE_MAP = new MimetypesFileTypeMap();
	static {
		MIME_TYPE_MAP.addMimeTypes("application/x-bmp bmp");
		MIME_TYPE_MAP.addMimeTypes("application/x-img img");
		MIME_TYPE_MAP.addMimeTypes("application/x-jpg jpg");
		MIME_TYPE_MAP.addMimeTypes("application/x-bmp bmp");
		MIME_TYPE_MAP.addMimeTypes("image/jpeg jpeg jpe");
		MIME_TYPE_MAP.addMimeTypes("image/ico ico");
		MIME_TYPE_MAP.addMimeTypes("application/msword doc");
		MIME_TYPE_MAP.addMimeTypes("application/vnd.ms-excel xls");
		MIME_TYPE_MAP.addMimeTypes("text/xml dtd xml");
		MIME_TYPE_MAP.addMimeTypes("audio/mp3 mp3");
		MIME_TYPE_MAP.addMimeTypes("application/x-zip-compressed zip");
	}

	public static String getContentType(File file) {
		return MIME_TYPE_MAP.getContentType(file);
	}

	public static String getContentType(String fileName) {
		return MIME_TYPE_MAP.getContentType(fileName);
	}
}