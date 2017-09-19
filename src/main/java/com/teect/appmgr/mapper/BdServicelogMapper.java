package com.teect.appmgr.mapper;

import com.teect.appmgr.bean.BdServicelog;
import java.util.List;

public interface BdServicelogMapper {
    int deleteByPrimaryKey(String id);

    int insert(BdServicelog record);

    BdServicelog selectByPrimaryKey(String id);

    List<BdServicelog> selectAll();

    int updateByPrimaryKey(BdServicelog record);
}