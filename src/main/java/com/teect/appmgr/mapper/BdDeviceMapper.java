package com.teect.appmgr.mapper;

import com.teect.appmgr.bean.BdDevice;
import java.util.List;

public interface BdDeviceMapper {
    int deleteByPrimaryKey(String id);

    int insert(BdDevice record);

    BdDevice selectByPrimaryKey(String id);

    int updateByIdSelective(BdDevice bean);

    List<BdDevice> selectAll(BdDevice bean);

    int updateByPrimaryKey(BdDevice record);
}