package com.teect.appmgr.mapper;

import com.teect.appmgr.bean.BdLoginlog;
import java.util.List;

public interface BdLoginlogMapper {
    int deleteByPrimaryKey(String id);

    int insert(BdLoginlog record);

    BdLoginlog selectByPrimaryKey(String id);

    List<BdLoginlog> selectAll(String id);

    int updateByPrimaryKey(BdLoginlog record);
}